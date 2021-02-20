module.exports = {
  title: 'CHS',
  description: '翻译终了的 NHS 内容',
  base: '/CHS/',
  themeConfig: {
    sidebar: [
      {
        title: '腹主动脉瘤',
        collapsable: false,
        children: [
          ['/abdominal-aortic-aneurysm', '总览'],
          ['/abdominal-aortic-aneurysm-treatment', '治疗'],
        ],
      },
      {
        title: '腹主动脉瘤检查',
        collapsable: false,
        children: [
          ['/abdominal-aortic-aneurysm-screening', '总览'],
          ['/abdominal-aortic-aneurysm-screening-faqs', '常见问题'],
        ],
      },
      '/hair-loss',
      '/watering-eyes',
      {
        title: '减肥手术',
        collapsable: false,
        children: [
          ['/weight-loss-surgery', '总览'],
          // ['/weight-loss-surgery-who-can-have-it', '适用性'],
          // ['/weight-loss-surgery-types.md', '类型'],
          // ['/weight-loss-surgery-afterwards.md', '术后'],
          // ['/weight-loss-surgery-risks.md', '风险'],
        ],
      },
      '/x-ray',
      '/zika',
    ],
    repo: 'HealthCHS/CHS',
  },
}
