USE SystemUser
GO
CREATE PROCEDURE [dbo].[spUpdateProject]
	@id varchar(100),
	@name varchar(100),
	@start_date date,
	@end_date date,
	@description varchar(500)
as

set nocount on;

begin
	UPDATE dbo.projects
	SET 
	name=@name,
	description=@description,
	start_date=@start_date,
	end_date=@end_date
	WHERE _id = @id;
end;



-- Syntax for Azure Synapse Analytics and Parallel Data Warehouse  
DROP PROCEDURE dbo.updateProject;  
GO 