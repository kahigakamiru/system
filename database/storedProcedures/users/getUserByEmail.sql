USE SystemUser
GO
CREATE OR ALTER PROCEDURE [dbo].[getUserByEmail]
	@email	varchar(250)
as
begin
	select	[_id],
			first,
			last,
			email,
			age,
			isAdmin,
			password
	from	[users]  where email = @email;
end;

exec getUserByEmail 'caleb@gmail.com'

INSERT INTO users(_id,first, last, email, age,[isAdmin],isDeleted, [password])
VALUES (2,'charles','ndegwa','ndegwacharles@gmail.com', 57, 0, 1, 'Kahi@123')

select * from users