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
      name: 'nome',
      title: 'nome',
      type: 'string',
    }),
    defineField({
      name: 'descricao',
      title: 'descricao',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
    }),
  ],
})

export const sociaisType = defineType({
  name: 'sociais',
  title: 'Redes sociais',
  type: 'document',
  fields: [
    defineField({
      name: 'instagram',
      title: 'instagram',
      type: 'url',
      validation: (validacao) => validacao.required(),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      validation: (validacao) => validacao.required(),
    }),
    defineField({
      name: 'whats',
      title: 'Whatsapp',
      type: 'string',
      validation: (validacao) =>
        validacao
          .required()
          .regex(/^(\+55\s?)?(\(?\d{2}\)?\s?)(\d{4,5}[-\s]?\d{4})$/, {
            name: 'telefone',
            invert: false,
          })
          .error('Formato de telefone inválido. Tente o formato (XX) XXXXX-XXXX'),
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

export const contatosType = defineType({
  name: 'contatos',
  title: 'Contatos',
  type: 'document',
  fields: [
    defineField({
      name: 'telefone',
      title: 'Telefone para Ligação',
      type: 'string',
      validation: (validacao) =>
        validacao
          .required()
          .regex(/^(\+55\s?)?(\(?\d{2}\)?\s?)(\d{4,5}[-\s]?\d{4})$/, {
            name: 'telefone',
            invert: false,
          })
          .error('Formato de telefone inválido. Tente o formato (XX) XXXXX-XXXX'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (Obrigatorio) => Obrigatorio.required(),
    }),
    defineField({
      name: 'rua',
      title: 'Rua, numero e bairro',
      placeholder: 'Rua, Número - Bairro',
      type: 'string',
      validation: (Obrigatorio) => Obrigatorio.required(),
    }),
    defineField({
      name: 'cidade',
      title: 'Cidade, Estado, pais',
      placeholder: 'Toledo, Paraná, Brasil',
      type: 'string',
      validation: (Obrigatorio) => Obrigatorio.required(),
    }),
    defineField({
      name: 'cep',
      title: 'Cep',
      type: 'string',
      validation: (Obrigatorio) =>
        Obrigatorio.regex(/^\d{5}\-?\d{3}/, {
          name: 'telefone',
          invert: false,
        }).error('Formato de CEP inválido. Use XXXXX-XXX ou XXXXXXXX'),
    }),
    defineField({
      name: 'horario',
      title: 'Horário de funcionamento',
      placeholder: 'Ex: Segunda a Sexta: 08:00 às 18:00',
      type: 'string',
      validation: (Obrigatorio) => Obrigatorio.required(),
    }),
    defineField({
      name: 'horarioFds',
      title: 'Horário de funcionamento - fim de semana',
      placeholder: 'Ex: Sábado: 08:00 ao 12:00 (Apenas para recebimento de amostras)',
      type: 'string',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Contatos',
        subtitle: 'Contato e localização',
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
        title: 'Link Unilab',
      }
    },
  },
})
