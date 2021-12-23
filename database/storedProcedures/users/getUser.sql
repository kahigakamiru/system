USE SystemUser
GO

CREATE PROCEDURE [dbo].[getUser]
	@userId	varchar(100)
as

set nocount on;

begin
	select	u.[_id],
			u.first,
			u.last,
			u.email,
			u.age,
			u.isAdmin
	from	[users] u where _id = @userId;
end;