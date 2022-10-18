package main

import (
	"fmt"
	"log"
	"os"

	"github.com/CristianFrancisco85/REDES2_1S2022_GRUPO21/database"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	DATABASE_URL := os.Getenv("DATABASE_URL")
	fmt.Println(DATABASE_URL)

	postgresRepo, err := database.NewPostgresRepository(DATABASE_URL)
	if err != nil {
		log.Fatal(err)
	}

	r := gin.Default()

	r.Use(CORSMiddleware())

	r.GET("/users", func(c *gin.Context) {
		users, err := postgresRepo.GetUsers()
		if err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}
		c.JSON(200, users)
	})

	r.GET("/puestos", func(c *gin.Context) {
		puestos, err := postgresRepo.GetPuestos()
		if err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}
		c.JSON(200, puestos)
	})

	r.GET("/data", func(c *gin.Context) {
		data, err := postgresRepo.GetData()
		if err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}
		c.JSON(200, data)
	})

	// Listen and serve on 4000
	r.Run(":4000")
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Header("Access-Control-Allow-Methods", "POST,HEAD,PATCH, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
