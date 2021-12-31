USE SystemUser
GO
CREATE OR ALTER PROCEDURE [dbo].[getUserByEmail]
	@email	varchar(250)
as
begin
	select	_id,
			password,
			first,
			email,
			isAdmin
	from	[dbo].users  where email = @email;
end;

exec getUserByEmail 'nget@gmail.com'

