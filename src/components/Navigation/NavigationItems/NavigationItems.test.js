import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems/>", () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = shallow(<NavigationItems />);
  });
  it("should render two <NavigationItem /> elements if not authenticated", () => {
    expect(Wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render three <NavigationItem /> elements if not authenticated", () => {
    // Wrapper = shallow(<NavigationItems isAuthenticated />);
    Wrapper.setProps({ isAuthenticated: true });
    expect(Wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("should render logout", () => {
    Wrapper.setProps({ isAuthenticated: true });
    expect(
      Wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
