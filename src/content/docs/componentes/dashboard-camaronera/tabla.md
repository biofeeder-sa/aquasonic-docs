---
title: Tabla de piscinas
description: Tabla resumen de piscinas y ciclos en el Dashboard de Camaronera — columnas, filtros, acciones y condiciones de visualización.
sidebar:
  order: 2
---

La **tabla de piscinas** del Dashboard de Camaronera muestra un resumen de cada piscina y su ciclo de producción actual. Permite comparar indicadores clave, ordenar columnas, filtrar piscinas activas y abrir el detalle de una piscina con un clic.

---

## ¿Por qué a veces no veo todas las columnas?

Algunas columnas dependen de que la **camaronera tenga habilitada la biomasa acústica**. Si esa configuración no está activa, **no aparecen** en pantalla (no se muestran vacías):

| Columna oculta sin biomasa acústica |
|---|
| **SUP** |
| **BIO HA** |
| **FCA** |

Las demás columnas (#, HA, DÍAS, ULT PESO, INC (1S), INC DIA, KG DIA PROM, ANIMALES, AA DOSIF) se mantienen.

:::note
**Columna que no aparece** no es lo mismo que **celda con `---`**. Si la columna está visible pero una piscina no tiene dato calculado, verá `---` en esa celda.
:::

Para el detalle diario o semanal de un ciclo (cómo se calcula SUP, BIO, FCA día a día), consulte la documentación del [Dashboard de Piscina — Tabla de ciclos](/aquasonic-docs/componentes/dashboard-piscina/tabla-ciclos/).

---

## Resumen de columnas

| # | Columna | Unidad | Descripción breve |
|---|---|---|---|
| 1 | **#** | — | Nombre o código de la piscina |
| 2 | **HA** | ha | Hectáreas de la piscina |
| 3 | **DÍAS** | días | Días de producción del ciclo, o **PREP** si la piscina está en preparación |
| 4 | **ULT PESO** | gr | Último peso promedio registrado por muestreo |
| 5 | **INC (1S)** | gr | Incremento de peso acumulado en la última semana |
| 6 | **INC DIA** | gr/día | Incremento diario de peso (promedio reciente) |
| 7 | **KG DIA PROM** | kg | Promedio de kilogramos de alimento suministrados por día |
| 8 | **ANIMALES** | cantidad | Estimación de animales vivos |
| 9 | **SUP** | % | Supervivencia estimada respecto a la siembra |
| 10 | **BIO HA** | lb | Biomasa estimada por hectárea |
| 11 | **FCA** | — | Factor de conversión alimenticia acumulado |
| 12 | **AA DOSIF** | fracción | Alimentadores que dosificaron / total de alimentadores |
| — | *(acciones)* | — | Alarmas (si hay) e icono de modo / estado de la piscina |

Las filas **9 a 11** solo aparecen si la camaronera tiene **biomasa acústica** habilitada.

---

## Detalle por columna

<details>
<summary><strong>#</strong> — Identificador de la piscina</summary>

#### ¿Qué es?

Código o nombre con el que se identifica la piscina en la camaronera (por ejemplo `BA1-018`).

#### ¿Cuándo se muestra?

Siempre, una fila por piscina con ciclo listado.

</details>

---

<details>
<summary><strong>HA</strong> — Hectáreas</summary>

#### ¿Qué es?

Superficie de la piscina en hectáreas.

#### ¿Cuándo se muestra?

Siempre que el dato esté registrado para la piscina.

</details>

---

<details>
<summary><strong>DÍAS</strong> — Días de producción</summary>

#### ¿Qué es?

Número de días transcurridos en el ciclo de producción.

#### Valores especiales

| Valor | Significado |
|---|---|
| Número (ej. `64`) | Días de cultivo en curso |
| **PREP** | La piscina está en estado de preparación (`opened`), aún sin siembra en producción |

</details>

---

<details>
<summary><strong>ULT PESO</strong> — Último peso de muestreo</summary>

#### ¿Qué es?

Peso promedio del camarón según el **último muestreo** registrado, en gramos.

#### ¿Cuándo se muestra?

Cuando existe al menos un muestreo con peso. Si no hay dato, verá `---`.

</details>

---

<details>
<summary><strong>INC (1S)</strong> — Incremento semanal</summary>

#### ¿Qué es?

Incremento de peso acumulado durante la **última semana** de producción, en gramos.

#### ¿Cuándo se muestra?

Cuando el sistema puede calcular el incremento de la semana. Si no aplica, `---`.

</details>

---

<details>
<summary><strong>INC DIA</strong> — Incremento diario</summary>

#### ¿Qué es?

Promedio de incremento de peso por día (gramos por día).

#### Valores especiales

| Valor | Significado |
|---|---|
| Número con dos decimales | Incremento calculado |
| **`--`** | Aún no hay incremento diario calculable |

</details>

---

<details>
<summary><strong>KG DIA PROM</strong> — Kilogramos diarios promedio</summary>

#### ¿Qué es?

Promedio de kilogramos de alimento suministrados por día en la ventana de cálculo vigente para esa piscina.

#### ¿Cuándo se muestra?

Cuando hay días válidos de alimentación en el periodo considerado. Sin dato: `---`.

:::tip
Este indicador es base para varios cálculos de biomasa y supervivencia en el detalle del ciclo. Si aquí aparece `---`, es probable que **SUP**, **BIO HA** o **FCA** tampoco tengan valor en esa fila.
:::

</details>

---

<details>
<summary><strong>ANIMALES</strong> — Animales vivos estimados</summary>

#### ¿Qué es?

Cantidad estimada de camarones vivos en la piscina, con separador de miles (ej. `1,062,934`).

#### ¿Cuándo se muestra?

Cuando existe estimación de biomasa y peso que permita calcular la población. Sin dato: `---`.

</details>

---

<details>
<summary><strong>SUP</strong> — Supervivencia estimada (%)</summary>

#### ¿Qué es?

Porcentaje de **supervivencia estimada** respecto a los animales sembrados al inicio del ciclo. El sistema lo calcula a partir del **último peso de muestreo** y de cuánto alimento registraron los alimentadores acústicos — **no** es el resultado de un muestreo manual de supervivencia.

Además del número, la celda muestra una **barra de color** (semáforo) bajo el porcentaje:

| Rango | Color de la barra | Interpretación |
|---|---|---|
| Mayor a 100 % | Azul océano | Por encima del 100 % (revisar contexto del ciclo) |
| 90 % – 100 % | Verde esmeralda | Supervivencia alta |
| 75 % – 89 % | Ámbar / dorado | Supervivencia media |
| Menor a 75 % | Coral | Supervivencia baja |

#### ¿Cuándo se muestra?

- La columna solo aparece si la camaronera tiene **biomasa acústica** habilitada.
- En cada fila, el valor suele estar disponible a partir del **día 7** del ciclo, cuando hay alimentación acústica fiable en la semana reciente.
- Si no se cumplen esas condiciones, verá `---` (aunque **ULT PESO** u otras columnas sí tengan dato).

#### Relación con otras columnas

Si **KG DIA PROM** o **ANIMALES** están en `---`, es probable que **SUP** también lo esté. En esta tabla verá el **último valor consolidado por piscina**; el detalle día a día está en el [Dashboard de Piscina](/aquasonic-docs/componentes/dashboard-piscina/tabla-ciclos/).

</details>

---

<details>
<summary><strong>BIO HA</strong> — Biomasa por hectárea</summary>

#### ¿Qué es?

Biomasa total estimada de la piscina dividida entre sus hectáreas, expresada en **libras** (ej. `10,448 lb`).

#### ¿Cuándo se muestra?

- Columna visible solo con **biomasa acústica** habilitada en la camaronera.
- Valor `---` cuando aún no hay biomasa calculable para esa piscina.

</details>

---

<details>
<summary><strong>FCA</strong> — Factor de conversión alimenticia</summary>

#### ¿Qué es?

Indicador acumulado de eficiencia alimenticia del ciclo (cuánto alimento se ha usado por unidad de biomasa ganada). Valores menores suelen indicar mejor conversión.

#### ¿Cuándo se muestra?

- Columna visible solo con **biomasa acústica** habilitada.
- Valor `---` si aún no se puede calcular.

</details>

---

<details>
<summary><strong>AA DOSIF</strong> — Eficiencia de dosificación acústica</summary>

#### ¿Qué es?

Muestra cuántos alimentadores **efectivamente dosificaron** respecto al total configurado en la piscina.

| Ejemplo | Significado |
|---|---|
| `7/7` | Los 7 alimentadores dosificaron |
| `2/2` | Los 2 alimentadores dosificaron |
| `---` | Sin información de dosificación disponible |

#### ¿Cuándo se actualiza?

Este valor se **complementa después** de cargar la tabla principal y se **refresca automáticamente** cada pocos minutos junto con alarmas y modo de dispositivos.

</details>

---

<details>
<summary><strong>Columna de acciones</strong> — Alarmas e icono de estado</summary>

#### Campana con número

Aparece solo si la piscina tiene **alarmas activas**. El número indica la cantidad. Al pulsar, se abre el listado de alarmas filtrado para esa piscina.

#### Botón circular (icono)

| Icono | Color habitual | Significado |
|---|---|---|
| **Micrófono** | Azul | Modo acústico |
| **Timer** | Dorado | Modo timer |
| **Pausa** | Según estado | Piscina inactiva |
| **Gris** | Gris | Sin dispositivos asignados a la piscina (tooltip al pasar el cursor) |

Al pulsar el botón (si la camaronera no está bloqueada) se abre el **panel de configuración** de la piscina.

</details>

---

## Actualización de datos

| Momento | Qué se actualiza |
|---|---|
| Al entrar al dashboard o cambiar de camaronera | Toda la tabla (todas las columnas principales) |
| Cada **3 minutos** (automático) | Alarmas por piscina, modo de dispositivos (icono) y columna **AA DOSIF** |
| Al cambiar filtro **Todas / Activas** | Solo qué filas se muestran; no vuelve a pedir datos al servidor |

:::caution
Si acaba de registrar un muestreo o un cambio de alimentación, los valores de **SUP**, **ULT PESO** o **FCA** pueden tardar en reflejarse hasta **recargar** el dashboard o esperar la próxima actualización automática de los indicadores complementarios.
:::

---

## Situaciones frecuentes

| Lo que observa | Qué significa |
|---|---|
| No ve columnas SUP, BIO HA ni FCA | La camaronera probablemente **no tiene biomasa acústica** habilitada |
| SUP con barra verde pero FCA en `---` | Puede haber supervivencia estimada sin FCA acumulado aún |
| Fila atenuada en gris | Ciclo **inactivo** (visible solo con filtro **Todas**) |
| `PREP` en DÍAS | Piscina en preparación, sin días de cultivo contados |
| `---` en varias columnas de una misma fila | Esa piscina aún no tiene suficientes datos de muestreo o alimentación para calcular esos indicadores |
| **ULT PESO** con valor pero **SUP** en `---` | Hay muestreo de peso, pero aún no hay suficiente historial de alimentación acústica (p. ej. ciclo nuevo o pocos días con datos fiables) |
| AA DOSIF en `---` pero resto con datos | La eficiencia de dosificación aún no se recibió o no aplica a esa piscina |
| Tabla en solo lectura | Suspensión bloqueante de la camaronera; puede consultar filas pero no usar botones de acción |
