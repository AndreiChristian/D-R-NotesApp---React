export interface Note {
  id: number;
  body: string;
  updated: string;
}

export const notes: Note[] = [
  {
    id: 1,
    body: "This is a note",
    updated: "2019-01-01",
  },
  {
    id: 2,
    body: "This is another note",
    updated: "2019-01-02",
  },
  {
    id: 3,
    body: "This is yet another note",
    updated: "2019-01-03",
  },
];
