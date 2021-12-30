USE SystemUser
GO
CREATE OR ALTER PROCEDURE [dbo].[getUsers]
as

set nocount on;

begin
	select	u.[_id],
			u.first,
			u.last,
			u.email
	from	[users] u 
	where u.isAdmin = 0
end;

EXEC getUsers

