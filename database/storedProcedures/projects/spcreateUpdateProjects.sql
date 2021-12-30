USE SystemUser
GO
CREATE OR ALTER PROCEDURE [dbo].[createUpdateProjects]
	@id varchar(100),
	@name varchar(100),
	@start_date date,
	@end_date date,
	@description varchar(250)
AS

BEGIN
    set nocount on;
    DECLARE @exists BIT;

    select @exists = count(_id) from dbo.projects where _id = @id;

    IF @exists = 0
        BEGIN
            INSERT INTO dbo.projects
            (_id, name,  start_date, end_date, description, isDeleted, isCompleted)
            VALUES
            (@id, @name,  @start_date, @end_date,  @description, 0, 0);
        END
    ELSE
        BEGIN
            UPDATE dbo.projects
            SET
            name = @name,
            start_date=@start_date,
            end_date=@end_date,
            description=@description
        END
END;
GO
select * from projects