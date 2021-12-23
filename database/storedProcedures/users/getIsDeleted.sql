USE SystemUser
GO
CREATE OR ALTER PROCEDURE [dbo].[getIsDeleted]
	@email	varchar(250)
as
begin
	select	[_id],
            isDeleted
	from	[users]  where email = @email;
end;
