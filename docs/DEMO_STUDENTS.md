# Demo student accounts

The `create_demo_students` command creates synthetic local/test users only. It
refuses to run unless Django `DEBUG=True` and the operator passes `--confirm`.
Never point it at the Ahost production database.

For an isolated local database, set a private development secret and run:

```powershell
$env:DJANGO_DEBUG = "True"
python manage.py create_demo_students --count 400 --confirm
```

The default credential file is `.local/demo-students.csv`, ignored by Git. It
contains generated passwords; keep it outside shared folders and never attach
it to logs, tickets, or commits. On Windows, restrict the folder to your
account:

```powershell
icacls "$PWD\.local" /inheritance:r /grant:r "$($env:USERNAME):(OI)(CI)F"
```

On POSIX systems, the command applies mode `0600` to the CSV file. If using
`--credentials-file` to choose another location, protect that directory with
account-only permissions as well. Passwords are generated with a cryptographic
random generator and stored in Django's password-hash format in the database.

Usernames start with `demo_student_`; each account has the `[demo-student]`
marker in its bio and an `example.invalid` email address. Re-running the
command leaves existing users unchanged and creates only missing demo users.
It aborts if any target username/email belongs to a non-demo account. The
credentials file is written locally and is never uploaded by the command.
