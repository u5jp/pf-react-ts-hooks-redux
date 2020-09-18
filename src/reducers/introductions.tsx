interface INTRODUCTION_STATE {
  id: string;
  title: string;
  body: string;
}

interface ACTION {
  type: string;
}

const i: INTRODUCTION_STATE = {
  id: "",
  title: "",
  body: "",
};

const introductions: React.Reducer<INTRODUCTION_STATE[], ACTION> = (
  state: INTRODUCTION_STATE[] = [i],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default introductions;
