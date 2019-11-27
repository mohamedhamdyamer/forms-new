use Formstack;
go

create table Form (
  FormId bigint primary key,
  FormName varchar(20) not null,
  FormDescription varchar(100),
  DateAdded date
);
go