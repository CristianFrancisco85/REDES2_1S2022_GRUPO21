package database

import (
	"database/sql"

	_ "github.com/lib/pq"
)

type PostgresRepository struct {
	db *sql.DB
}

func NewPostgresRepository(url string) (*PostgresRepository, error) {
	db, err := sql.Open("postgres", url)
	if err != nil {
		return nil, err
	}
	return &PostgresRepository{db: db}, nil
}

func (r *PostgresRepository) Close() error {
	return r.db.Close()
}

func (r *PostgresRepository) GetUsers() ([]User, error) {
	rows, err := r.db.Query("SELECT * FROM users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	users := []User{}
	for rows.Next() {
		var u User
		if err := rows.Scan(&u.ID, &u.Name, &u.Img, &u.Carnet, &u.Puesto, &u.Curso, &u.Description); err != nil {
			return nil, err
		}
		users = append(users, u)
	}
	return users, nil
}

func (r *PostgresRepository) GetPuestos() ([]Puesto, error) {
	rows, err := r.db.Query("SELECT * FROM puestos")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	puestos := []Puesto{}
	for rows.Next() {
		var p Puesto
		if err := rows.Scan(&p.ID, &p.Title, &p.Description); err != nil {
			return nil, err
		}
		puestos = append(puestos, p)
	}
	return puestos, nil
}

func (r *PostgresRepository) GetData() ([]Data, error) {
	rows, err := r.db.Query("SELECT * FROM ecodata")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	data := []Data{}
	for rows.Next() {
		var d Data
		if err := rows.Scan(&d.ID, &d.Serie, &d.Marca, &d.Valor); err != nil {
			return nil, err
		}
		data = append(data, d)
	}
	return data, nil
}
