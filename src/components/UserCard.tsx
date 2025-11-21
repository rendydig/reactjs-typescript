import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addUser, removeUser, fetchUsers } from '@/store/slices/userSlice'
import { Users, UserPlus, Trash2, Loader2 } from 'lucide-react'

export function UserCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useAppSelector((state) => state.user.users)
  const loading = useAppSelector((state) => state.user.loading)
  const dispatch = useAppDispatch()

  const handleAddUser = () => {
    if (name && email) {
      dispatch(addUser({
        id: Date.now().toString(),
        name,
        email,
      }))
      setName('')
      setEmail('')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          User Management
        </CardTitle>
        <CardDescription>
          Redux state with RxJS async operations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleAddUser} className="w-full">
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>

        <div className="border-t pt-4">
          <Button 
            onClick={() => dispatch(fetchUsers())} 
            variant="outline" 
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              'Fetch Users (RxJS - 1.5s delay)'
            )}
          </Button>
        </div>

        {users.length > 0 && (
          <div className="border-t pt-4 space-y-2">
            <h4 className="text-sm font-semibold">Users List:</h4>
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-3 bg-secondary rounded-lg"
              >
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => dispatch(removeUser(user.id))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
