import React, { useEffect } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import api from '../../services/api'
import { useParams } from 'react-router-dom'
import { FormItem, Button, Label, Input, Row, FormArray, ArrayLabel } from './styles'
import fetchedHelper from '../../helpers/fetchedHelper'
import useUpdateDragon from '../../hooks/useUpdateDragon'
import useCreateDragon from '../../hooks/useCreateDragon'

const Form = ({ newDragon }) => {
  let { dragonId } = useParams();

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      type: '',
      histories: [{ value: ''}]
    }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: "histories"
  });

  const updateDragon = useUpdateDragon(dragonId)
  const createDragon = useCreateDragon()

  const onSubmit = (data) => {
    if (newDragon) createDragon(data)
    else updateDragon(data)
  }

  useEffect(() => {
    if (!newDragon) {
      api.get(`/${dragonId}`)
        .then(({ data }) => { reset(fetchedHelper(data)) })
    }
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <Label>Nome</Label>
        <Input type='text' {...register('name')}/>
      </FormItem>

      <FormItem>
      <Label>Tipo</Label>
      <Input type='text' {...register('type')}/>
      </FormItem>

      <FormArray>
        <ArrayLabel>
          Histórias
          <Button
            small
            type="button"
            onClick={() => { append({value: ''}) }}
          >
            Adicionar
          </Button>

        </ArrayLabel>
        {fields.map((field, index) => (
          <Row key={field.id}>
            <Input
              type='text'
              defaultValue={field.value}
              {...register(`histories[${index}].value`)}
            />
            <Button
              small
              type='button'
              onClick={() => remove(index)}
            >
              Remover
            </Button>
          </Row>
        ))}
      </FormArray>

      <Button
        type='submit'
      >
        Enviar
      </Button>
    </form>
  )
}

export default Form
