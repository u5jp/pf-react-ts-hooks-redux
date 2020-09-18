interface SKILL_STATE {
  name: string;
  period: string;
  proficiency: number;
  interest: number;
}

interface ACTION {
  type: string;
}

const i: SKILL_STATE = {
  name: "",
  period: "",
  proficiency: 0,
  interest: 0,
};

const skill: React.Reducer<SKILL_STATE[], ACTION> = (
  state: SKILL_STATE[] = [i],
  action
) => {
  console.log(state);
  switch (action.type) {
    case "SORT_INTEREST":
      state.sort(function (a: any, b: any) {
        a = a.interest;
        b = b.interest;
        if (a < b) {
          return +1;
        } else if (a > b) {
          return -1;
        }
        return 0;
      });
      return [...state];
    case "SORT_PROFICIENCY":
      state.sort(function (a: any, b: any) {
        a = a.proficiency;
        b = b.proficiency;
        if (a < b) {
          return +1;
        } else if (a > b) {
          return -1;
        }
        return 0;
      });
      return [...state];
    case "SORT_NAME":
      state.sort(function (a: any, b: any) {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
        return 0;
      });
      return [...state];
    default:
      return [...state];
  }
};

export default skill;
