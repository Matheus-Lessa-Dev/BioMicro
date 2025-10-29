import {defineField, defineType} from 'sanity'

export const noticiasType = defineType({
  name: 'noticias',
  title: 'Noticias',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
    }),
  ],
})

export const imagensType = defineType({
  name: 'imagem',
  title: 'Imagens',
  type: 'document',
  fields: [
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
    }),
    defineField({
      name: 'nome',
      title: 'nome',
      type: 'string',
    }),
  ],
})

export const sociaisType = defineType({
  name: 'sociais',
  title: 'Redes sociais',
  type: 'document',
  fields: [
    defineField({
      name: 'telefone',
      title: 'Telefone',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^(\+55\s?)?(\(?\d{2}\)?\s?)(\d{4,5}[-\s]?\d{4})$/, {
          name: 'telefone',
          invert: false,
        }).error('Formato de telefone inválido. Tente o formato (XX) XXXXX-XXXX'),
    }),
    defineField({
      name: 'instagram',
      title: 'instagram',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Redes sociais',
        subtitle: 'Contato e links',
      }
    },
  },
})

export const unilabType = defineType({
  name: 'unilab',
  title: 'Link unilab',
  type: 'document',
  fields: [
    defineField({
      name: 'unilab',
      title: 'Unilab',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return {
        name: 'Link Unilab',
      }
    },
  },
})
