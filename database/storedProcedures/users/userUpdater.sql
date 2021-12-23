USE SystemUser
GO

CREATE PROCEDURE [dbo].[userUpdater]
	@id varchar(100),
	@firstname varchar(100),
	@lastname varchar(100),
	@email varchar(250),
	@age int
as

set nocount on;

begin
	UPDATE dbo.users
	SET 
	first=@firstname, 
	last=@lastname, 
	email=@email, 
	age=@age
	WHERE _id = @id;
end;