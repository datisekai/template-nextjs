export interface CurrentChapter {
  slug: string;
  name: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface UpComingNovel {
  slug: string;
  name: string;
  time: string;
  currentChapter: CurrentChapter;
  category: Category[];
}
