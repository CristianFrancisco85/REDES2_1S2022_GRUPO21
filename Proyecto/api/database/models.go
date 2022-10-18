package database

type User struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Img         string `json:"img"`
	Carnet      string `json:"carnet"`
	Puesto      string `json:"puesto"`
	Curso       string `json:"curso"`
	Description string `json:"description"`
}

type Puesto struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

type Data struct {
	ID    int    `json:"id"`
	Serie string `json:"serie"`
	Marca int64  `json:"marca"`
	Valor int64  `json:"valor"`
}
