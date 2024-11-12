import React from 'react';
import { Card, ProgressBar, Stack, Button, Col } from 'react-bootstrap';
import { currencyFormatter } from '../../utils';

export default function BudgetCard({ name, amount, max, onAddExpenseClick, gray, hideBtn, viewExpenseClick }) {
  
  const getProgressbarVariant = (amount, max) => {
    const ratio = amount / max;
    if (ratio < 0.5) return 'primary';
    if (ratio < 0.75) return 'warning';
    return 'danger';
  };

  const cardClasses = ['shadow-sm', 'rounded'];
  if (parseInt(amount) > parseInt(max)) {
    cardClasses.push('bg-danger', 'bg-opacity-10');
  } else if (gray) {
    cardClasses.push('bg-secondary', 'bg-opacity-10');
  }

  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <Card className="mb-4">
        <Card.Body className={cardClasses.join(' ')}>
          <Card.Title className="d-flex align-items-baseline fw-normal">
            <div className="me-auto">{name}</div>
            <div className="ms-auto d-flex align-items-baseline">
              <span className="me-1">{currencyFormatter.format(amount)}</span>
              {!isNaN(max) && (
                <span className="text-muted fs-6">/ {currencyFormatter.format(max)}</span>
              )}
            </div>
          </Card.Title>
          {name !== "Uncategorized" && (
            <ProgressBar 
              className="rounded-pill" 
              variant={getProgressbarVariant(amount, max)} 
              min={0} 
              max={max} 
              now={amount} 
              style={{ height: '10px' }}
            />
          )}
          {!hideBtn && (
            <Stack direction="horizontal" className="mt-4 justify-content-end">
              <Button variant="warning" className="ms-auto" onClick={onAddExpenseClick}>
                Add Expense
              </Button>
              <Button variant="primary" className="ms-2" onClick={viewExpenseClick}>
                View Expenses
              </Button>
            </Stack>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
