import React from "react";
import { render, screen, fireEvent, wait } from "@testing-library/react";
import BubblePage from "./BubblePage";
import userEvent from '@testing-library/user-event';

// defining mock
import { fetchColors as mockFetchColors} from '../api/fetchColors';
jest.mock('./api/fetchColors')


test("Fetches data and renders the bubbles", () => {
  // Finish this test

});
