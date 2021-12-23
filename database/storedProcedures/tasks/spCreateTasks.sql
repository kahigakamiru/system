CREATE OR ALTER PROCEDURE [dbo].[createTasks]
	@taskID int,
    @taskname varchar(100),
	@projectID INT,
	@userID INT,
    @Desc VARCHAR(255)
as

set nocount on;

begin
	INSERT INTO dbo.tasks
	(@taskID,
    @taskname,
	@projectID,
	@userID,
    @Desc)
	VALUES
	(@taskID,
    @taskname,
	@projectID,
	@userID,
    @Desc);
end;

