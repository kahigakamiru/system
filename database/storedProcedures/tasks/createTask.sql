CREATE OR ALTER PROCEDURE [dbo].[createTask]
	@name varchar(100),
	@project_id varchar(100),
	@start_date date,
	@end_date date,
	@description varchar(500)
as

set nocount on;

begin
	INSERT INTO dbo.tasks
	(name, project_id,  start_date, end_date, description, isDeleted, isCompleted)
	VALUES
	(@name, @project_id, @start_date, @end_date, @description,  0, 0);
end;

drop proc createTask


select * from projects

select * from users

-- Drop '[ColumnName]' from table '[TableName]' in schema '[dbo]'
ALTER TABLE [dbo].[tasks]
	DROP COLUMN [user_id]
GO

drop table tasks

