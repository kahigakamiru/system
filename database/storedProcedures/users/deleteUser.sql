USE SystemUser
GO
CREATE OR ALTER  PROCEDURE [dbo].[deleteUser]
	@id varchar(100)
as

set nocount on;

begin
	UPDATE dbo.users
	SET 
	isDeleted=1
	WHERE _id = @id;
end;