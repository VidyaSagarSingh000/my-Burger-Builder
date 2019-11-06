import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./BurgerBuilder";
import BuiltControls from "../../components/Burger/BuiltControls/BuiltControls";

configure({ adapter: new Adapter() });
describe("<BurgerBuilder/>", () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });
  it("should receive <BuiltControls/> when receiving ingredients", () => {
    Wrapper.setProps({ ings: { salad: 0 } });
    expect(Wrapper.find(BuiltControls)).toHaveLength(1);
  });
});
