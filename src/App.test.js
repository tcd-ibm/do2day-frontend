import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';


describe("Testing App", () => {

    it("renders basic elements", () => {
      render(<App />);

      expect(
        screen.getByRole('heading', {level: 1})
      ).toHaveTextContent("Do2Day");

      expect(
        screen.getByRole("textbox")
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", { name: /➕/i })
      ).toBeInTheDocument();


    });

});
