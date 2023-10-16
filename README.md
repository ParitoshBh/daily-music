# Daily Music

## Application Flow

This application allows you to create unique forms (using api call) that can then be shared with users to submit their music suggestions. These submitted music suggestions can then be retreieved using another api call. Here's the flow in a bit more detail,

| Step | Route                                          | Description                                                                  | Headers                  | Authorization | Body                      |
|------|------------------------------------------------|------------------------------------------------------------------------------|--------------------------|---------------|---------------------------|
| 1    | [POST] /api/music/create-form                  | Create new form.                                                             | Accept: application/json | Basic         | { "name": "<FORM_NAME>" } |
| 2    | [GET] /form/<FORM_ID>                          | Share "url" with user. Opening url in web browser will show submission form. | -                        | -             | -                         |
| 3    | [GET] /api/music/suggestions?form-id=<FORM_ID> | Get submitted music suggestions by form_id.                                  | Accept: application/json | Basic         | -                         |

## Development

Development of this repository has been configured to use Visual Studio Code and Docker. In order to start developing, open the repository in [Visual Studio Code](https://code.visualstudio.com/). Doing so will prompt you to open the project in dev container. Once you do so, everything will be setup for your.

Alternatively, the same setup can also be achieved using Github Codespaces (available through Github website).

### Running Locally

1. Export supabase key environment variable by running - `export SUPABASE_KEY=<YOUR_KEY>`.
2. Export supabase url environment variable by running - `export SUPABASE_URL=<YOUR_URL>`.
3. Run `npm run dev`.

Both, key and url can be retreived from supabase admin.

> **Warning**  
> Running application locally currently connects with production database. Please use responsibly.

### Generating/Updating Database Schema

1. Export supabase access token environment variable by running - `export SUPABASE_ACCESS_TOKEN=<YOUR_TOKEN>`.
2. Replace `PROJECT_ID` in `supabase:gen-types` script with correct project id (can be viewed in supabase admin).
3. Run script `npm run supabase:gen-types` for updating database schema.

## TODO - Future Improvements

- [ ] Use local database for local development.
- [ ] Add tests.
- [ ] Add view for admin users (`is_admin=true`) to be able to create forms using UI.
- [ ] Add ability to delete created forms.
- [ ] Paginate results of `/api/music/suggestions?form-id=<FORM_ID>`.
- [ ] Add view for adming users (`is_admin=true`) to be able to view suggestions using UI.
