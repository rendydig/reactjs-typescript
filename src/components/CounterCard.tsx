import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { increment, decrement, incrementByAmount, reset, asyncIncrement } from '@/store/slices/counterSlice'
import { Plus, Minus, RotateCcw, Clock } from 'lucide-react'

export function CounterCard() {
  const count = useAppSelector((state) => state.counter.value)
  const history = useAppSelector((state) => state.counter.history)
  const dispatch = useAppDispatch()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Counter Demo</CardTitle>
        <CardDescription>
          Redux Toolkit state management with TypeScript
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-6xl font-bold text-primary">{count}</div>
        </div>
        
        <div className="flex gap-2 justify-center flex-wrap">
          <Button onClick={() => dispatch(increment())} size="lg">
            <Plus className="mr-2 h-4 w-4" />
            Increment
          </Button>
          <Button onClick={() => dispatch(decrement())} variant="secondary" size="lg">
            <Minus className="mr-2 h-4 w-4" />
            Decrement
          </Button>
          <Button onClick={() => dispatch(incrementByAmount(5))} variant="outline" size="lg">
            +5
          </Button>
          <Button onClick={() => dispatch(reset())} variant="destructive" size="lg">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>

        <div className="border-t pt-4">
          <Button 
            onClick={() => dispatch(asyncIncrement())} 
            variant="outline" 
            className="w-full"
          >
            <Clock className="mr-2 h-4 w-4" />
            Async Increment (RxJS - 1s delay)
          </Button>
        </div>

        {history.length > 0 && (
          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold mb-2">History:</h4>
            <div className="flex gap-2 flex-wrap">
              {history.slice(-10).map((val, idx) => (
                <span key={idx} className="px-2 py-1 bg-secondary rounded text-sm">
                  {val}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
