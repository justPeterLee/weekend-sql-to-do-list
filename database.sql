CREATE TABLE tasks(
	id serial PRIMARY KEY,
	task varchar(50) NOT NULL,
	description VARCHAR(180),
	completion INT DEFAULT 0,
	difficulty INT,
	due TIMESTAMP NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO tasks(task, description, difficulty, due, created_at)
VALUES('eat food', 'eat very good food', 2, '2022-12-17 7:50');
