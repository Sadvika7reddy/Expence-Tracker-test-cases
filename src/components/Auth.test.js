import { render,screen } from "@testing-library/react";
import Auth from './Auth';
describe('Auth component',()=>{
    test('renders Hello World as a text',()=>{
        render(<Auth/>);
        const helloWorldElement=screen.getByText('Hello World');
        expect(helloWorldElement).toBeInTheDocument();
    })
})