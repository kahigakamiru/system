USE SystemUser
GO
CREATE OR ALTER PROCEDURE [dbo].[getUserByEmail]
	@email	varchar(250)
as
begin
	select	_id,
			password
	from	[dbo].users  where email = @email;
end;

exec getUserByEmail 'nget@gmail.com'

