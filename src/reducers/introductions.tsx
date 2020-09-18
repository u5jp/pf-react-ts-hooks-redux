const i: INTRODUCTION_STATE = {
  id: "",
  title: "",
  body: "",
};

interface INTRODUCTION_STATE {
  id: string;
  title: string;
  body: string;
}

const introductions = (state: INTRODUCTION_STATE[] = [i], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default introductions;
