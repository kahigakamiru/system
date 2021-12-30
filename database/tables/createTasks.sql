CREATE TABLE tasks (
	_id INT  PRIMARY KEY IDENTITY,
	name varchar(250) NOT NULL,
	project_id varchar(100) NOT NULL,
	description varchar(100) NOT NULL,
	start_date DATE NOT NULL,
	end_date DATE NOT NULL,
	isDeleted BIT NOT NULL,
	isCompleted BIT NOT NULL,
	FOREIGN KEY (project_id) REFERENCES projects (_id) ON DELETE CASCADE ON UPDATE CASCADE
)

DROP TABLE tasks
Select * from tasks