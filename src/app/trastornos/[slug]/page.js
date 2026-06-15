import React from 'react'
import { obtenerTrastonoPorSlug } from '@/lib/md'
import VistaTrastorno from '@/components/vistaTrastorno'

export default function PaginaTrastorno(props) {
  const params = React.use(props.params);
  const slug = params.slug;
  
  const trastorno = obtenerTrastonoPorSlug(slug);

  if (!trastorno) {
    return <div className="p-10 text-center">El trastorno no fue encontrado.</div>;
  }

  return <VistaTrastorno trastorno={trastorno} />;
}