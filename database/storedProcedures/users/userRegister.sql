USE SystemUser
GO
CREATE OR ALTER PROCEDURE [dbo].[userRegister]
	@id varchar(100),
	@firstname varchar(100),
	@lastname varchar(100),
	@email varchar(250),
	@age int,
	@password varchar(250),
	@isAdmin int,
	@isDeleted BIT
as

set nocount on;

begin
	INSERT INTO dbo.users
	(_id, first, last, email,  age, password, isDeleted, isAdmin)
	VALUES
	(@id, @firstname, @lastname, @email,  @age, @password, @isAdmin, @isDeleted);
end;

select * from users

