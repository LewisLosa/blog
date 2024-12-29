import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PostCard } from "@/components/post-card"
import { RecentPosts } from "@/components/recent-posts"
import { FeaturedPost } from "@/components/featured-post"

const posts = [
  {
    title: "MVVM Nedir ve Diğer Mimarilerden Farkı Nedir?",
    excerpt: "Merhaba! Ben Kotlin ile Android Programlama Akademisi katılımcılarından Adile Güngör. Kotlin ile Android Programlama Akademisi, Afetten Etkilenen Yazılımcı Gençlerin Güçlenmesi ve İstihdama yönelik bir programdır. Bu yazıda, MVVM (Model-View-ViewModel) mimarisini ve diğer mimarilerden farkını inceleyeceğiz.",
    slug: "mvvm-nedir"
  },
  {
    title: "C# Nedir? Ve Performansı Diğer Dillere Göre Nasıldır?",
    excerpt: "C# (C-Sharp), Microsoft tarafından geliştirilen güçlü ve çok yönlü bir programlama dilidir. Nesne yönelimli programlama, fonksiyonel programlama ve bileşen odaklı programlama paradigmalarını destekler. Bu yazıda C#'ın temel özelliklerini ve performansını diğer dillerle karşılaştıracağız.",
    slug: "csharp-nedir"
  },
  {
    title: "React Hooks: useState ve useEffect Kullanımı",
    excerpt: "React Hooks, fonksiyon bileşenlerinde state ve yaşam döngüsü özelliklerini kullanmanıza olanak tanır. Bu yazıda, en sık kullanılan iki hook olan useState ve useEffect'i derinlemesine inceleyeceğiz. Örnek uygulamalar üzerinden bu hook'ların nasıl kullanılacağını ve yaygın kullanım senaryolarını göreceğiz.",
    slug: "react-hooks-usestate-useeffect"
  },
  {
    title: "Python ile Veri Analizi: Pandas Kütüphanesi",
    excerpt: "Pandas, Python programlama dilinde veri manipülasyonu ve analizi için kullanılan güçlü bir kütüphanedir. Bu yazıda, Pandas'ın temel özelliklerini ve veri analizi sürecinde nasıl kullanılacağını öğreneceksiniz. Gerçek dünya veri setleri üzerinde uygulamalı örneklerle Pandas'ın gücünü keşfedeceğiz.",
    slug: "python-veri-analizi-pandas"
  },
  {
    title: "GraphQL vs REST API: Hangisi Ne Zaman Kullanılmalı?",
    excerpt: "Modern web uygulamalarında veri alışverişi için kullanılan iki popüler API yaklaşımı: GraphQL ve REST. Bu yazıda, her iki yaklaşımın avantajlarını, dezavantajlarını ve hangi durumlarda tercih edilmeleri gerektiğini karşılaştıracağız. Gerçek dünya senaryoları üzerinden en uygun API seçimini nasıl yapacağınızı öğreneceksiniz.",
    slug: "graphql-vs-rest-api"
  }
]

const recentPosts = [
  {
    title: "MVVM Nedir Ve Diğer Mimarilerden Farkı Nedir?",
    slug: "mvvm-nedir"
  },
  {
    title: "C# Nedir? Ve Performansı Diğer Dillere Göre Nasıldır?",
    slug: "csharp-nedir"
  },
  {
    title: "React Hooks: useState ve useEffect Kullanımı",
    slug: "react-hooks-usestate-useeffect"
  },
  {
    title: "Python ile Veri Analizi: Pandas Kütüphanesi",
    slug: "python-veri-analizi-pandas"
  },
  {
    title: "GraphQL vs REST API: Hangisi Ne Zaman Kullanılmalı?",
    slug: "graphql-vs-rest-api"
  }
]

export default function Home() {
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="container py-12 space-y-12">
        <FeaturedPost {...featuredPost} />
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            {otherPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
          <aside>
            <RecentPosts posts={recentPosts} />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

