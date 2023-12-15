"use client"; // This is a client component
import Card from '../components/Card'
import Field from '../components/Field'
import ResultsField from '../components/ResultsField'
import Button from '../components/Button'
import { useState } from 'react'


export default function Home() {
  const [showUserListCard, setShowUserListCard] = useState(false)
  const [newItem, setNewItem] = useState('')
  const [itemArray, setItemArray] = useState([])

  const handleUsernameInput = (event) => {
    setNewItem(event.target.value)
  }

  const handleButtonClick = (event) => {
    event.preventDefault()
    const newUsers = {
      name: newItem,
      id: itemArray.length + 1,
    }
    setItemArray((prevItemArray) => [...prevItemArray, newUsers])
    setNewItem('')
    setShowUserListCard(true)
  }

  return(
    <>
      <div className="flex justify-center">
        <Card>
          <Field
            for="addItem"
            label="Add new item"
            type="text"
            name="addItem"
            value={newItem}
            onChange={handleUsernameInput}
          />

          <div>
            <div className="m-4">
              <Button
                onClick={handleButtonClick}>
                Add Item
              </Button>
            </div>
          </div>
        </Card>
      </div>
      {showUserListCard && (
        <div className="flex justify-center">
          <Card>
            <ul>
              {itemArray.map((user) => (
                <ResultsField key={user.id}>{user.name}</ResultsField>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </>
  )
};
