import { render } from '@testing-library/react';
import { screen, fireEvent, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { SignUpDialog } from '../components/forms/SignUpDialog';
import { Toaster } from '@/components/ui/toaster';

// Mock Supabase
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: vi.fn(() => ({
      insert: vi.fn(() => Promise.resolve({ error: null }))
    })),
    functions: {
      invoke: vi.fn(() => Promise.resolve({ error: null }))
    }
  }
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    span: 'span'
  }
}));

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <Toaster />
  </>
);

describe('SignUpDialog', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the trigger button', () => {
    render(
      <TestWrapper>
        <SignUpDialog>
          <button>Open Dialog</button>
        </SignUpDialog>
      </TestWrapper>
    );

    expect(screen.getByText('Open Dialog')).toBeInTheDocument();
  });

  it('opens dialog when trigger is clicked', async () => {
    render(
      <TestWrapper>
        <SignUpDialog>
          <button>Open Dialog</button>
        </SignUpDialog>
      </TestWrapper>
    );

    fireEvent.click(screen.getByText('Open Dialog'));
    
    await waitFor(() => {
      expect(screen.getByText('Start Building with Realm 101')).toBeInTheDocument();
    });
  });

  it('validates form inputs', async () => {
    render(
      <TestWrapper>
        <SignUpDialog>
          <button>Open Dialog</button>
        </SignUpDialog>
      </TestWrapper>
    );

    fireEvent.click(screen.getByText('Open Dialog'));
    
    await waitFor(() => {
      expect(screen.getByText('Start Building with Realm 101')).toBeInTheDocument();
    });

    const submitButton = screen.getByText('Get Early Access');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('First name must be at least 2 characters.')).toBeInTheDocument();
      expect(screen.getByText('Last name must be at least 2 characters.')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(
      <TestWrapper>
        <SignUpDialog>
          <button>Open Dialog</button>
        </SignUpDialog>
      </TestWrapper>
    );

    fireEvent.click(screen.getByText('Open Dialog'));
    
    await waitFor(() => {
      expect(screen.getByText('Start Building with Realm 101')).toBeInTheDocument();
    });

    // Fill form
    fireEvent.change(screen.getByPlaceholderText('John'), {
      target: { value: 'John' }
    });
    fireEvent.change(screen.getByPlaceholderText('Doe'), {
      target: { value: 'Doe' }
    });
    fireEvent.change(screen.getByPlaceholderText('john@example.com'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Acme Inc.'), {
      target: { value: 'Acme Inc.' }
    });

    const submitButton = screen.getByText('Get Early Access');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Creating your account...')).toBeInTheDocument();
    });
  });
});