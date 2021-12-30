USE SystemUser
GO
CREATE OR ALTER PROCEDURE [dbo].[userRegister]
	@id varchar(100),
	@firstname varchar(100),
	@lastname varchar(100),
	@email varchar(250),
	@password varchar(250)
as

set nocount on;

begin
	INSERT INTO dbo.users
	(_id, first, last, email, password )
	VALUES
	(@id, @firstname, @lastname, @email,  @password);
end;

select * from users

DROP PROC userRegister
 -- Drop '[ColumnName]' from table '[TableName]' in schema '[dbo]'
ALTER TABLE [dbo].[users]
	DROP COLUMN [age]
GO