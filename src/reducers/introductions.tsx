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

const introductions = (state: INTRODUCTION_STATE[] = [i], action: ACTION) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default introductions;
