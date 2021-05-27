import {screen, render} from "@testing-library/react";
import Header from "./Header";

describe('Header render', () => {
    it('should get the correct arguments that passed', async function () {
        render(<Header/>)
        expect(screen.getByAltText('logo')).toBeInTheDocument()
        expect(await screen.findByRole('img')).toBeNull()
    });
})