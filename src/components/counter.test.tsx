import Counter from './counter';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

describe('Counter', () => {
    test('render counter', async () => {
        user.setup();
        render(<Counter />);
        expect(screen.getByRole('heading', { name: 'Counter' })).toBeInTheDocument();

        const button = screen.getByRole('button', { name: 'Count is: 0' });
        await user.click(button);
        await user.click(button);
        expect(button).toHaveTextContent('Count is: 1');
        expect(true).toBeTruthy();
    });
});
