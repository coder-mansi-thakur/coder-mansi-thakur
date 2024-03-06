const baseUrl = '/api/notes/'
export const notesUrl = {
  addNotes: `${baseUrl}add`,
  listNotes: `${baseUrl}list`,
  deleteNote: `${baseUrl}delete`,
  editNote: `${baseUrl}edit`,
  getTags: `${baseUrl}tags/list`,
  createTag: `${baseUrl}tags/create`,
}
