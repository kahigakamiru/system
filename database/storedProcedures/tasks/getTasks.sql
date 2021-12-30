CREATE PROCEDURE [dbo].[getTasks]
 @project_id varchar(100)
as

set nocount on;

begin
	select	t._id,
			t.name,
			t.project_id,
			t.user_id,
			t.start_date,
			t.end_date,
			t.description
	from	[tasks] t where project_id = @project_id;
end;


USE SystemUser
GO
select * from tasks
insert into tasks(name, project_id,description,user_id, start_date,end_date,isDeleted,isCompleted)
values('kahiga','1', 'first project', 1, '1/12/2021', '2/12/2021','1',0),
      ('caleb','1', 'first project plus one', 1, '1/12/2021', '2/12/2021','1',0),
	  ('janathan','1', 'second project chally', 421, '30/11/2021', '10/12/2021','1',0),
	  ('Dancan','1', 'first project', 1, '1/12/2021', '2/12/2021','1',0),
	  ('john','1', 'first project', 1, '1/12/2021', '2/12/2021','1',0),
	  ('lucky','1', 'first project', 1, '1/12/2021', '2/12/2021','1',0)

exec getTasks @project_id = "1e71c75a-c11c-4f29-83e4-e41bdf85e012"