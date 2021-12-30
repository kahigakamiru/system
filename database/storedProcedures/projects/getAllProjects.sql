CREATE OR ALTER PROCEDURE getAllProjects

AS
BEGIN

   select * from projects
END;

EXEC getAllProjects;

select * from tasks

select * from projects;

-- Drop '[ColumnName]' from table '[TableName]' in schema '[dbo]'
ALTER TABLE [dbo].[projects]
   DROP COLUMN [lead_user_id]
GO
