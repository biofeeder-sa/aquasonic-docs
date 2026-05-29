---
title: Tabla de Días del Ciclo
description: Detalle diario de un ciclo de producción — columnas, cálculos y condiciones de visualización.
sidebar:
  order: 2
---

Esta tabla muestra el detalle diario de un ciclo de producción. A continuación se documenta cada columna, cómo se calcula y cuándo se muestra.

---

## Resumen de columnas

| # | Columna | Unidad | Descripción breve |
|---|---|---|---|
| 1 | DÍA | — | Número de día del ciclo (inicia en 0) |
| 2 | FECHA | Fecha | Fecha calendario correspondiente al día |
| 3 | PESO | gramos | Peso promedio estimado del camarón |
| 4 | CREC LIN | gramos | Incremento lineal diario de peso |
| 5 | INC (DIA) | gramos | Incremento de peso real en día de muestreo |
| 6 | INC (1S) | gramos | Incremento acumulado de la última semana |
| 7 | KG DÍA | kg | Kilogramos de alimento suministrados en el día |
| 8 | KG DÍA PROM | kg | Promedio de alimento diario (últimos 7 días con control de calidad) |
| 9 | KG DÍA HA | kg | Kilogramos de alimento por hectárea |
| 10 | ANIMALES | cantidad | Estimación de animales vivos |
| 11 | SUP | % | Porcentaje de supervivencia estimada |
| 12 | BIO HA | libras | Biomasa por hectárea |
| 13 | BIO | libras | Biomasa total estimada |
| 14 | FCA | — | Factor de conversión alimenticia acumulado |

---

## Detalle por columna

<details>
<summary><strong>1. DÍA</strong> — Número de día del ciclo</summary>

#### ¿Qué es?

Número secuencial que indica el día del ciclo de producción. Comienza en **0** (día de siembra).

#### ¿Cómo se obtiene?

Se genera automáticamente de forma consecutiva a partir de la fecha de siembra.

#### ¿Cuándo se muestra?

Siempre. Todos los días del ciclo tienen este valor.

</details>

---

<details>
<summary><strong>2. FECHA</strong> — Fecha calendario</summary>

#### ¿Qué es?

Fecha del calendario que corresponde a cada día del ciclo.

#### ¿Cómo se obtiene?

Se calcula como: **Fecha de siembra + número de día**.

#### ¿Cuándo se muestra?

Siempre. Todos los días del ciclo tienen este valor.

</details>

---

<details>
<summary><strong>3. PESO</strong> — Peso promedio del camarón (gramos)</summary>

#### ¿Qué es?

Peso promedio estimado del camarón en gramos para ese día.

#### ¿Cómo se obtiene?

- En **días de muestreo**: es el peso real obtenido del muestreo.
- En **días sin muestreo**: se calcula por interpolación lineal entre el muestreo anterior y el siguiente (o proyección si no hay siguiente).

#### ¿Cuándo se muestra?

Desde el día 0 y hasta **7 días después del último muestreo**. Después de eso, ya no se proyecta.

</details>

---

<details>
<summary><strong>4. CREC LIN</strong> — Crecimiento lineal diario (gramos)</summary>

#### ¿Qué es?

La tasa de crecimiento diario del camarón en gramos, calculada como una línea recta entre dos muestreos consecutivos.

#### ¿Cómo se obtiene?

Es la pendiente de la recta entre el peso del muestreo anterior y el muestreo actual, es decir, cuántos gramos crece el camarón por día en promedio.

#### ¿Cuándo se muestra?

A partir del día 1. Si no hay datos de crecimiento, se muestra vacío.

</details>

---

<details>
<summary><strong>5. INC (DIA)</strong> — Incremento diario real (gramos)</summary>

#### ¿Qué es?

El incremento de peso real por día, medido únicamente en los días donde se realizó un muestreo.

#### ¿Cómo se obtiene?

```
INC (DIA) = (Peso muestreo actual − Peso muestreo anterior) ÷ días entre muestreos
```

#### ¿Cuándo se muestra?

**Solo en días de muestreo.** Los días sin muestreo muestran vacío (`--`).

</details>

---

<details>
<summary><strong>6. INC (1S)</strong> — Incremento semanal (gramos)</summary>

#### ¿Qué es?

El crecimiento total acumulado del camarón en los últimos 7 días.

#### ¿Cómo se obtiene?

```
INC (1S) = suma del incremento diario (INC DIA) de los últimos 7 días (día actual incluido)
```

#### ¿Cuándo se muestra?

A partir del **día 7** del ciclo, solo cuando los datos de peso están confirmados (reconciliados).

</details>

---

<details>
<summary><strong>7. KG DÍA</strong> — Kilogramos de alimento del día</summary>

#### ¿Qué es?

La cantidad total de alimento (en kilogramos) que se suministró en la piscina durante ese día.

#### ¿Cómo se obtiene?

- **Días con registros del equipo**: se toma la lectura directa de los logs del alimentador.
- **Días reconciliados**: se usa el valor aprobado manualmente.
- **Día actual (en tiempo real)**: se suman los feeds registrados por el dispositivo hasta el momento.

#### ¿Cuándo se muestra?

Cuando el día tiene registros de alimentación o fue reconciliado. Si no hay datos, se muestra vacío (`--`).

</details>

---

<details>
<summary><strong>8. KG DÍA PROM</strong> — Promedio de alimento diario con control de calidad</summary>

#### ¿Qué es?

Es el **promedio de kilogramos de alimento diario** de los últimos 7 días, considerando **únicamente los días que pasaron el control de calidad** del equipo acústico.

#### ¿Cuándo se muestra?

Se muestra a partir del **día 7** del ciclo, siempre que exista al menos un día válido en la ventana de 7 días que permita calcular la biomasa.

#### ¿Cómo se calcula?

**Fórmula:**

```
KG DÍA PROM = suma(KG DÍA de los días válidos) ÷ cantidad de días válidos
```

La ventana siempre abarca los **7 días anteriores** al día actual (sin incluirlo).

#### ¿Qué es un "día válido"?

Un día se considera válido para incluirse en el promedio si cumple **al menos una** de estas condiciones:

| Condición | Significado |
|---|---|
| El día fue **reconciliado** | Un usuario revisó y aprobó manualmente los datos de alimentación de ese día |
| Eficiencia de dosis **≥ 80%** y cobertura de hidrófono **≥ 100%** | El equipo acústico operó correctamente: la dosis se entregó con al menos 80% de eficiencia y el hidrófono tuvo cobertura completa |

Los días que **no cumplen ninguna** de estas condiciones se **descartan** del cálculo.

#### ¿Qué pasa si ningún día cumple las condiciones?

El valor queda en **cero** y la columna se muestra vacía (`--`). Además, al no tener KG DÍA PROM, las columnas que dependen de este valor (ANIMALES, SUP, BIO HA, BIO, FCA) **tampoco se calculan** y aparecen vacías.

:::note
No se toma el valor del día anterior. Si no hay días válidos, simplemente no hay datos para mostrar.
:::

#### Edición manual

El usuario puede sobrescribir este valor manualmente desde la aplicación. Al hacerlo:

- El sistema respeta el valor editado y **no lo recalcula** automáticamente
- Se puede **revertir** la edición manual para que el sistema vuelva a calcular el promedio normalmente

#### Comportamiento según escenarios

| Escenario | Qué se muestra |
|---|---|
| Varios días cumplen las condiciones | El promedio cambia cada día conforme la ventana de 7 días se desliza |
| Solo 1 día cumple las condiciones | El promedio es igual al KG DÍA de ese único día y se repite mientras permanezca en la ventana |
| Ningún día cumple las condiciones | Se muestra vacío (`--`) junto con biomasa, animales, supervivencia y FCA |
| El valor fue editado manualmente | Se usa el valor manual sin recalcular |

#### Ejemplos

**Ejemplo 1 — Solo 1 día válido en la ventana**

En un ciclo, de los últimos 7 días solo el día 14 tuvo el equipo acústico operando correctamente (eficiencia ≥ 80% e hidrófono ≥ 100%). Ese día se suministraron 380 kg de alimento.

```
KG DÍA PROM = 380 ÷ 1 = 380 kg
```

Como es el único día válido, el valor **380 kg** se repite cada día mientras el día 14 siga dentro de la ventana de 7 días. A partir del día 22, el día 14 sale de la ventana y, si no hay nuevos días válidos, la columna quedará vacía.

**Ejemplo 2 — Varios días válidos**

En otro ciclo, los días 1 al 5 cumplieron las condiciones, con estos kilogramos:

| Día | KG DÍA |
|---|---|
| 1 | 150 kg |
| 2 | 150 kg |
| 3 | 175 kg |
| 4 | 225 kg |
| 5 | 225 kg |

```
KG DÍA PROM = (150 + 150 + 175 + 225 + 225) ÷ 5 = 185 kg
```

Al día siguiente, la ventana se desliza: entra un nuevo día y sale el más antiguo, por lo que el promedio cambia.

#### ¿Por qué es importante?

KG DÍA PROM es la **base para calcular la biomasa acústica** y todos los indicadores que dependen de ella:

| Indicador | Se calcula a partir de |
|---|---|
| KG DÍA HA (promedio) | KG DÍA PROM ÷ hectáreas de la piscina |
| Biomasa (kg) | KG DÍA PROM ÷ factor de alimentación |
| Biomasa (lb) | Biomasa en kg × 2.20462 |
| Biomasa / ha | Biomasa en lb ÷ hectáreas |
| Animales vivos | (Biomasa en kg ÷ peso en gramos) × 1,000 |
| Supervivencia (%) | (Animales vivos ÷ animales sembrados) × 100 |
| FCA | Alimento acumulado ÷ biomasa en kg |

Si KG DÍA PROM no tiene valor, **ninguno de estos indicadores se puede calcular**.

</details>

---

<details>
<summary><strong>9. KG DÍA HA</strong> — Kilogramos de alimento por hectárea</summary>

#### ¿Qué es?

Kilogramos de alimento suministrados ese día, divididos entre las hectáreas de la piscina.

#### ¿Cómo se obtiene?

```
KG DÍA HA = KG DÍA ÷ hectáreas de la piscina
```

#### ¿Cuándo se muestra?

Cuando KG DÍA tiene valor. Si KG DÍA está vacío, esta columna también.

</details>

---

<details>
<summary><strong>10. ANIMALES</strong> — Estimación de animales vivos</summary>

#### ¿Qué es?

Cantidad estimada de camarones vivos en la piscina.

#### ¿Cómo se obtiene?

```
ANIMALES = (Biomasa en kg ÷ peso promedio en gramos) × 1,000
```

#### ¿Cuándo se muestra?

A partir del **día 7**, cuando existe biomasa calculada (es decir, cuando KG DÍA PROM tiene valor).

</details>

---

<details>
<summary><strong>11. SUP</strong> — Supervivencia estimada (%)</summary>

#### ¿Qué es?

Porcentaje estimado de supervivencia de los camarones con respecto a la cantidad sembrada.

#### ¿Cómo se obtiene?

```
SUP = (Animales vivos estimados ÷ cantidad de animales sembrados) × 100
```

#### ¿Cuándo se muestra?

A partir del **día 7**, cuando existe biomasa calculada.

</details>

---

<details>
<summary><strong>12. BIO HA</strong> — Biomasa por hectárea (libras)</summary>

#### ¿Qué es?

Biomasa estimada por hectárea, expresada en libras.

#### ¿Cómo se obtiene?

```
BIO HA = Biomasa total en libras ÷ hectáreas de la piscina
```

#### ¿Cuándo se muestra?

A partir del **día 7**, cuando existe biomasa calculada.

</details>

---

<details>
<summary><strong>13. BIO</strong> — Biomasa total (libras)</summary>

#### ¿Qué es?

Biomasa total estimada de la piscina, expresada en libras.

#### ¿Cómo se obtiene?

```
BIO = Biomasa en kg × 2.20462
```

Donde la biomasa en kg se calcula a partir de KG DÍA PROM y el factor de alimentación según la regla activa.

#### ¿Cuándo se muestra?

A partir del **día 7**, cuando existe biomasa calculada.

</details>

---

<details>
<summary><strong>14. FCA</strong> — Factor de conversión alimenticia</summary>

#### ¿Qué es?

Relación entre el alimento total acumulado y la biomasa producida. Indica cuántos kilogramos de alimento se necesitan para producir un kilogramo de biomasa.

#### ¿Cómo se obtiene?

```
FCA = Alimento acumulado (kg) ÷ (Biomasa actual en kg + Biomasa cosechada en kg)
```

Un FCA más bajo indica **mayor eficiencia** en la conversión de alimento.

#### ¿Cuándo se muestra?

A partir del **día 7**, cuando existe biomasa calculada.

</details>

---

:::tip
Este documento se irá ampliando con mayor detalle en cada columna conforme se documente.
:::
