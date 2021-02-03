activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-129392692-1' # Replace with your property ID.
end





###
# Blog settings
###

Time.zone = "Paris"
I18n.config.enforce_available_locales = false



page "/feed.xml", layout: false



page "/bilan_partage_de_medication.html", :layout => "bpm"
page "/officine.html", :layout => "pharmacie-officine"
page "/equipe.html", :layout => "equipe"
page "/conciliation_medicamenteuse.html", :layout => "conciliation_medicamenteuse"
page "/conciliation-medicamenteuse-demonstration.html", :layout => "conciliation_medicamenteuse"
page "/industriel.html", :layout => "assistantanalysepharmaceutique"
page "/pharmacie_clinique.html", :layout => "pharmacie_clinique"
page "/fonctionnalites.html", :layout => "fonctionnalites"
page "/messagerie_medecin.html", :layout => "nonavbarnofooter"
page "/faculte_de_pharmacie.html", :layout => "nonavbarnofooter"
page "/site_internet_pharmacie.html", :layout => "nonavbarnofooter"
page "/confirmation-demo-bimedoc.html", :layout => "confirmation-demo-bimedoc"


