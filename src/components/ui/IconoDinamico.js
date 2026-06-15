import React from 'react'
import * as Icons from 'lucide-react'

export default function IconoDinamico({ nombre, ...props }) {
  const Icono = Icons[nombre] || Icons['Brain'];

    return <Icono {...props} />;
}