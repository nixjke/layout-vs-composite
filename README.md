# Рендер в html/css
## 🔎 Как проверить производительность анимации в Chrome DevTools:

### ✅ 1. **Открой DevTools**

- ПКМ по странице → `Inspect` (или `F12`, или `Ctrl+Shift+I`)

- Перейди на вкладку **Performance**

---
### ✅ 2. **Запусти запись профиля**

- Нажми на большую **кнопку записи (●)** в левом верхнем углу

- Выполни нужное действие на странице (например, нажми кнопку с анимацией)

- Нажми снова на кнопку записи (⏹️), чтобы остановить

---
### ✅ 3. **Разбор профиля**

Теперь тебе доступен целый разбор по слоям. Обрати внимание на:

#### 🧩 **Main Thread (основной поток)**:

- Если ты используешь `left/top` — появится **Layout / Recalculate Style / Paint**

- Это значит, что браузеру пришлось **пересчитать расположение всех элементов**, возможно и перерисовать


#### 🚀 **Compositor**:

- Если ты используешь `transform` — ты раньше мог увидеть **Composite Layers**

##### После обновления DevTools:

- **`Composite Layers` больше НЕ отображается как отдельный блок в профиле.**

- Вместо этого все композитинг-операции **входят в обобщённые процессы**:

    - `Animation Frame Fired`

    - `Update Layer Tree`

    - `Composite Frame`

    - `Paint Frame`


➡ Это всё ещё **происходит**, просто **не подсвечивается явно, как раньше**.

- Это значит, что анимация пошла через **GPU**, и браузер просто переместил готовый слой — **без layout/paint** ➜ 🔥 супер быстро!

---
## 🖼️ Визуальный способ: paint flashing

Можешь включить подсветку перерисовок:

### Как включить:

1. В DevTools зайди во вкладку **Rendering**  
   (если не видно — нажми `Esc`, откроется нижняя панель → вкладка `Rendering`)

2. Включи галочку **"Paint flashing"**


Теперь любые **области, которые браузер перерисовывает**, будут **мигать зелёным**.  
→ При `left/top` — мигает.  
→ При `transform` — нет.

---

## 📦 Бонус: как Chrome обрабатывает свойства

|Свойство|Layout|Paint|Composite|GPU|
|---|---|---|---|---|
|`left/top/right`|✅|✅|✅|❌|
|`transform`|❌|❌|✅|✅|
|`opacity`|❌|❌|✅|✅|
|`width/height`|✅|✅|✅|❌|
